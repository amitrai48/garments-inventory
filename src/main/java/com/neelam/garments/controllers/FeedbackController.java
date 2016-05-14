package com.neelam.garments.controllers;

import org.apache.velocity.app.VelocityEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.ui.velocity.VelocityEngineUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

import javax.mail.internet.MimeMessage;

import com.neelam.garments.model.Feedback;
import com.neelam.garments.repository.FeedbackRepository;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {

	@Autowired
	FeedbackRepository feedbackRepository;

	@Autowired
	private JavaMailSender mailSender;

	@Autowired
	private VelocityEngine velocityEngine;

	private SimpleMailMessage templateMessage;

	@Value("${send.from.email}")
	private String fromEmail;
	//
	// @RequestMapping(method=RequestMethod.GET)
	// public List<Feedback> findA()
	// {
	// return feedbackRepository.findAll();
	// }

	@RequestMapping(method = RequestMethod.POST)
	public Feedback save(@Validated @RequestBody Feedback feedback) {
		Map<String, Object> model = new HashMap<String, Object>();
		model.put("name", feedback.getName());
		MimeMessagePreparator preparator = new MimeMessagePreparator() {
			@Override
			public void prepare(MimeMessage mimeMessage) throws Exception {
				MimeMessageHelper message = new MimeMessageHelper(mimeMessage);
				message.setFrom(fromEmail);
				message.setTo(feedback.getEmailId());
				message.setSubject("Thank you for your valuable feedback");
				message.setText(VelocityEngineUtils.mergeTemplateIntoString(velocityEngine,
						"thankyou.vm","UTF-8", model), true);
			}
		};

		try {
			this.mailSender.send(preparator);
			System.out.println("Sending mail");
		} catch (MailException ex) {
			System.err.println(ex.getMessage());
		}
		return feedbackRepository.save(feedback);
	}

	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public void deleteByEmailid(@PathVariable("id") String id) {
		feedbackRepository.deleteByEmailIdLike(id);
	}

	// @RequestMapping(value="{id}",method=RequestMethod.DELETE)
	// public void deleteByProduct(@PathVariable("id") String id)
	// {
	// feedbackRepository.deleteByProductLike(id);
	// }

	// @RequestMapping(value="/{id}", method=RequestMethod.GET)
	// public List<Feedback> findByEmailId(@PathVariable("id") String id)
	// {
	// return feedbackRepository.findByEmailIdLike(id);
	// }

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public List<Feedback> findByProduct(@PathVariable("id") String id) {
		return feedbackRepository.findByProductLike(id);
	}
}
